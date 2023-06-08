# payments-oas

OAS specification for the paymentsAPI

The specification is currently published at
- https://kierans.github.io/payments-oas/payments-api.html

# Structure

To manage the complexity of the API definition, the API spec is modularised as much as is 
possible<sup>1</sup>.

The src tree comprises:
- `paramenters` - Definition of HTTP parameters
- `resources` - The [resources][1] that are offered by the API eg: offers, sessions, etc.
- `responses` - Definitions of responses from the server
- `schemas` - Definitions of representations for the API
- `security` - Authorisation specification

To view the API spec in its entirety, the spec must be assembled from the parts.

# Tools

The spec is written using TS definitions from the [openapi-types][2]. The resulting JSON is
printed to stdout by running

```shell
$ npx ts-node src/payments-api.ts
```

[redocly][4] can be used to lint the JSON to find any mistakes.

To view the spec in a human friendly format, either [swagger-ui][3] or [redocly][4] can
transform the spec into HTML.

A Makefile is also provided for convenience, however the commands are shell commands and can
be run without `make` being present.

The examples use `make`.

## Assembling the spec

After changes are made to source files, the whole spec can be assembled into a single JSON
file.

```shell
$ make assemble
```

## Previewing changes

To see changes in the HTML docs as they are made serve up the spec in a web server

```shell
$ make serve
```

**Note** after making changes in the source tree, the spec needs to be assembled for changes
to be reflected in the browser.

## Making a distribution

To make a final distribution suitable for hosting

```shell
$ make dist
```

## Why code

The OAS templating language does not allow very sophisticated reuse capabilities. [$ref][8] is
about it.

To facilitate reuse or the generation of the spec with slightly different characteristics (for
example, a code provider vs a code consumer) code is better.

----

1: Credit to [David Garcia][6] for his blog post outlining how to modularise an Open API spec.

[1]: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm#sec_5_2_1_1
[2]: https://github.com/kogosoftwarellc/open-api/tree/master/packages/openapi-types
[3]: https://github.com/swagger-api/swagger-ui/
[4]: https://redocly.com/
[6]: https://davidgarcia.dev/posts/how-to-split-open-api-spec-into-multiple-files/
[8]: https://swagger.io/docs/specification/using-ref/
