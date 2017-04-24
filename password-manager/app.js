console.log('starting password mamager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('create', 'creates an account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'your account name goes here',
        type: 'string'
      },
      userName: {
        demand: true,
        alias: 'u',
        description: 'your username goes here',
        type: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'your password goes here',
        type: 'string'
      }
    }).help('help');
  })
  .command('get', 'gets an account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'account name goes here',
        type: 'string'
      }
    });
  })
  .help('help')
  .argv;

var command = argv._[0];

function createAccount(account){
  var accounts = storage.getItemSync('accounts');
  if (typeof accounts === 'undefined'){
    var accounts = [];
  }
  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName){
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  for (var i = 0; i < accounts.length; i++){
    if (accounts[i].name === accountName ){
      matchedAccount = accounts[i];
    }
  }
  return matchedAccount;
}

if (command === 'create'){
  createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  })
} else if (command === 'get'){
  console.log(getAccount(argv.name));
}
