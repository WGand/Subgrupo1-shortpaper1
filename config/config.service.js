"use strict";
exports.__esModule = true;
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'ec2-23-20-140-229.compute-1.amazonaws.com',
    port: 5432,
    username: 'wtrlyymabbvbzj',
    password: '31f761364e9e1f4ce70d9ac064c0e742fbb2822fef8bd4550b08ad81969ad2d6',
    database: 'd6m4eujm8ahc4f',
    ssl: {
        rejectUnauthorized: false
    },
    entities: ['**/*.entity.js'],
    synchronize: true,
    autoLoadEntities: true
};
