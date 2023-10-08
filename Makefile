watch-css:
	npx tailwindcss -i ./web/assets/tailwind.css -o ./dist/output.css --watch
watch-rs:
	cargo watch -x run
