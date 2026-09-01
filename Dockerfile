# FF Advisors public site — ready for Railway later. Do not deploy from this repo yet.
FROM node:22-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
# Railway injects $PORT at boot. Official nginx image envsubst's
# /etc/nginx/templates/*.template → /etc/nginx/conf.d/ (only defined env vars).
ENV PORT=8080
COPY nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
# Keep the image ENTRYPOINT so 20-envsubst-on-templates.sh runs before nginx.
CMD ["nginx", "-g", "daemon off;"]
