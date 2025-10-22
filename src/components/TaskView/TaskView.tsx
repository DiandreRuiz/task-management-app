import React from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

// All tasks mapped into slots that have dropdowns
// Open tasks page we just see dropdowns
// Open from specific task in TaskFeed that one is opened

const TaskView: React.FC = () => {
    const { tasks } = useTasks();
    const params = useParams();
    console.log(params.taskId);
};

export default TaskView;
