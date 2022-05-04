const Task = require('../models/task.js');


// Different colors for different categories
let colors = {
  personal : 'darkgreen',
    work : 'darkmagenta',
    school : 'darkorange',
    cleaning : 'darkblue',
    other : 'darkcyan',
    'n/a' : 'grey',
}

// controller function for route '/'
module.exports.home = (req,res) => {
  Task.find({},(err,tasks) => {
    if(err){
      console.log('Error in fetching Tasks');
      return;
    };
    return res.render('home',{
      task_list : tasks,
      color_list : colors
    })
  })
}