const Task = require('../models/task');

module.exports.create = function(req, res){
      let newDate;
    // if no date is selected
    if(req.body.date.length == 0){
        newDate = 'No Deadline'
    }
    // If date is selected, this will convert the date to required format
    else{
        let temp = req.body.date;
        let date = temp.substring(8, 10);
        let mon = temp.substring(5, 7);
        let year = temp.substring(0, 4);

        if(date[0] == '0'){
            date = date.substring(1);
        }
        if(mon[0] == '0'){
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + months[mon-1] + " " + date + ", " + year;
    };
  // create a new task and store in db
  const newTask = new Task({
        description : req.body.description,
        category : req.body.category,
        date : newDate
  })
  newTask.save()
          .then(task => {
            console.log(task)
            return res.redirect('back');
          })
          .catch(err => {
            console.log(err)
          })
}
