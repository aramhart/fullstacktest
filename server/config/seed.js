/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Game from '../api/game/game.model';
import User from '../api/user/user.model';

Game.find({}).remove()
  .then(() => {
    Game.create({
      name: 'Super Mario Bros',
      platform: 'NES',
      genre: 'Platformer'
    }, {
      name: 'Castlevania',
      platform: 'NES',
      genre: 'Platformer'
    }, {
      name: 'Plumbers Dont Wear Ties',
      platform: '3DO',
      genre: 'FMV'
    }, {
      name: 'SimCity',
      platform: 'Super Nintendo',
      genre: 'Simulator'
    }, {
      name: 'Halo',
      platform: 'XBOX',
      genre: 'Shooter'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
