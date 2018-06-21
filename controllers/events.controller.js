const Event = require('../models/Articles')

module.exports = {

  // show all events
  // showEvents: (req, res) => {

    // seed our database
    seedEvents: (req, res) => {
      // create some events
      const events = [
        { title: 'Basketball', body: 'Throwing into a basket.', author: 'Micheal Jordan' },
        { title: 'Swimming', body: 'Michael Phelps is the fast fish.', author: 'Micheal Jordan' },
        { title: 'Weightlifting', body: 'Lifting heavy things up', author: 'Micheal Jordan' }
      ];

      // use the Event model to insert/save
      for (event of events) {
        var newEvent = new Event(event);
        newEvent.save();
      }

      // seeded!
      res.send('Database seeded!');
    }

  }
// };
