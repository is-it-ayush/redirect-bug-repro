#### 307 temporary redirect...
- known:
  - trying to redirect from a client component (via `router` from `next/navigation`) to a server component,
first attempts to pre-fetch the (to-be-redirected) page, then fails to redirect on it. the network
tab, states a `307 temporary redirect`.
  - it sometimes works & sometimnes does not.
- unknown:
  - is this actually a bug? (or am i just slightly stupid & i missed something)

this is a minimal repro of the bug.
