SRC_SPEC=src/payments-api.ts
DIST_SPEC=dist/payments-api.json
DIST_DOC=dist/payments-api.html

assemble:
	@npx make-dir dist
	npx ts-node $(SRC_SPEC) > $(DIST_SPEC)
	npx redocly lint $(DIST_SPEC)

clean:
	npx rimraf dist

dist: assemble
	@npx redocly build-docs $(DIST_SPEC) --output $(DIST_DOC)

serve:
	npx redocly preview-docs $(DIST_SPEC) --host=0.0.0.0

.PHONY: assemble clean dist
