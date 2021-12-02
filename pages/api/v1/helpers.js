export const getProjectStatistics = (projectId, tasks) => {
    const tasksByProjectId = tasks.filter(task => task.project == projectId);
    const statistic = {
        todo: 0,
        prog: 0,
        revw: 0,
        done: 0
    }

    tasksByProjectId.forEach(task => {
        switch (task.status) {
            case "TODO":
                statistic["todo"] += 1;
                break;
            case "PROG":
                statistic["prog"] += 1;
                break;
            case "REVW":
                statistic["revw"] += 1;
                break;
            case "DONE":
                statistic["done"] += 1;
                break;
        }
    });
 
    return [
        {
            label: "Todo",
            value: statistic["todo"]
        },
        {
            label: "In Progress",
            value: statistic["prog"]
        },
        {
            label: "In Review",
            value: statistic["revw"]
        },
        {
            label: "Done",
            value: statistic["done"]
        },
    ]
}