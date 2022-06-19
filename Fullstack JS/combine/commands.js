const program = require('commander');


const {
    listUser, countUser, facebookUser, googleUser
}= require('./commandquery');


program
        .version('1.0.0')
        .description('Version 1.0.0 for Refactory')
     
program
        .command('list')
        .alias('l')
        .description('List Semua User')
        .action(()=>listUser());

program
        .command('sum')
        .alias('s')
        .description('Hitung Jumlah User')
        .action(()=>countUser());

program
        .command('lisf')
        .alias('lfb')
        .description('Pengguna Facebook dan Jumlah Penggunanya')
        .action(()=>facebookUser());

program
        .command('lisgo')
        .alias('lfb')
        .description('Pengguna Facebook dan Jumlah Penggunanya')
        .action(()=>googleUser());

program.parse(process.argv);