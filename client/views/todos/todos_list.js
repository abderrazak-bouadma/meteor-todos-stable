/**
 * Created by merzoug on 10/2/14.
 */
var todosData = [
    {
        taskName:"By the milk 2",
        taskDescription:"Really, don't forget the milk !",
        taskStatus:false
    },
    {
        taskName:"daily biking",
        taskDescription:"make the 20Km",
        taskStatus:true
    },
    {
        taskName:"hello 1",
        taskDescription:"",
        taskStatus:false
    },
    {
        taskName:"hello 2",
        taskDescription:"Really, don't forget the milk !",
        taskStatus:false
    },
    {
        taskName:"repair the stairs",
        taskDescription:"Really, don't forget the milk !",
        taskStatus:true
    }
];

Template.todosList.helpers({
        todos:todosData
    }
);
