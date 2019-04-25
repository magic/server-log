const state = {
  title: '@magic/log',
}

const View = () => [
  h1('@magic/log'),
  p('nodejs console.log with loglevels and environment awareness.'),

  GitBadges({
    project: 'magic/log',
    appveyor: 'jaeh/log',
  }),

  h2({ id: 'getting-started' }, 'Getting started'),
  p('be in a nodejs project.'),

  h3({ id: 'install' }, 'install'),
  Pre.View('npm i --save-dev @magic/log'),

  h2({ id: 'usage' }, 'usage:'),

  h3({ id: 'log-levels' }, 'log levels'),

  div([
    h4({ id: 'log-levels-all' }, 'all'),
    p('set logLevel to all'),
    Pre.View(`
log.setLevel('all')
log.setLevel(0)`),

    h4({ id: 'log-levels-warnings' }, 'warnings'),
    p('only output warnings and errors'),
    Pre.View(`
log.setLevel('warn')
log.setLevel(1)`),

    h4({ id: 'log-levels-errors' }, 'errors'),
    p('only log on error'),
    Pre.View(`
log.setLevel('error')
log.setLevel(2)`),

    h4({ id: 'log-levels-resetlevel' }, 'log.resetLevel'),
    p('if production, set logLevel to "warn", if development, "all"'),
    Pre.View('log.resetLevel()'),

    h4({ id: 'log-levels-getlevel' }, 'log.getLevel()'),
    p('get current logLevel'),
    Pre.View('log.getLevel()'),
  ]),

  h3({ id: 'log-functions' }, 'log functions'),

  div([
    h4({ id: 'log-functions-info' }, 'log.info'),
    p("only outputs if logLevel === 'all'"),
    Pre.View(`log.info('Some interesting yet useless information')`),

    h4({ id: 'log-functions-success' }, 'log.success'),
    p("only outputs if logLevel === 'all'."),
    p('output of first argument is green.'),
    Pre.View(`log.success('yay', 'only the first', 'argument was green')`),

    h4({ id: 'log-functions-error' }, 'log.error'),
    p('always outputs. first argument will be red'),
    Pre.View(`log.error('ERROR:', 'error messsage')`),

    h4({ id: 'log-functions-warn' }, 'warn'),
    p("outputs if logLevel === 'warn' || 'all'"),
    Pre.View("log.warn('WARN:', 'warn message')"),

    h4({ id: 'log-functions-annotate' }, 'annotate'),
    Pre.View("log.annotate('this message is subtle and greyed out')"),
  ]),
]

module.exports = {
  state,
  View,
}
