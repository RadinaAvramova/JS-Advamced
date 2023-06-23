class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

class Point {    

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance = (p1, p2) => { return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);}
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(otherPoint) {
        let distanceX = this.x - otherPoint.x;
        let distanceY = this.y - otherPoint.y;
        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        return distance;
    }

    static distance(pointA, pointB) {
        let distanceX = pointA.x - pointB.x;
        let distanceY = pointA.y - pointB.y;
        let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        return distance;
    }
}

