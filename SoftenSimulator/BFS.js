function BFS(x, y) {
    let visited = [];
    for (let i = 0; i<100; i++) {
        visited.push([]);
        for (let j = 0; j<100; j++) {
            visited[i].push(false);
        }
    }
    let graph = [];
    for (let i = 0; i<100; i++) {
        graph.push([]);
        for (let j = 0; j<100; j++) {
            graph[i].push(false);
        }
    }
    paths = [];
    if (vejnet[x][y]) {
        paths.push({x: x, y: y})
    }
    visited[x][y] = true;
    graph[x][y] = 0;
    skridt = 0;
    for (let i=0; i<paths.length; i++) {
        skridt = graph[paths[i].x][paths[i].y] + 1;
        if (paths[i].x < 100) {
            if (vejnet[paths[i].x+1][paths[i].y] && visited[paths[i].x+1][paths[i].y] == false) {
                visited[paths[i].x+1][paths[i].y] = true;
                graph[paths[i].x+1][paths[i].y] = skridt;
                paths.push({x: paths[i].x+1, y: paths[i].y})
            }
        }
        if (paths[i].x > 0) {
            if (vejnet[paths[i].x-1][paths[i].y] && visited[paths[i].x-1][paths[i].y] == false) {
                visited[paths[i].x-1][paths[i].y] = true;
                graph[paths[i].x-1][paths[i].y] = skridt;
                paths.push({x: paths[i].x-1, y: paths[i].y})
            }
        }
        if (paths[i].y < 100) {
            if (vejnet[paths[i].x][paths[i].y+1] && visited[paths[i].x][paths[i].y+1] == false) {
                visited[paths[i].x][paths[i].y+1] = true;
                graph[paths[i].x][paths[i].y+1] = skridt;
                paths.push({x: paths[i].x, y: paths[i].y+1})
            }
        }
        if (paths[i].y > 0) {
            if (vejnet[paths[i].x][paths[i].y-1] && visited[paths[i].x][paths[i].y-1] == false) {
                visited[paths[i].x][paths[i].y-1] = true;
                graph[paths[i].x][paths[i].y-1] = skridt;
                paths.push({x: paths[i].x, y: paths[i].y-1})
            }
        }
    }
    return(graph);
}