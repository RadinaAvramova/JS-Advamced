function contructionCrew(input) {
    const obj = { ...input };

    if(obj.dizziness) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
        return obj;
    }

    return obj;
}

contructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })

contructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })

contructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })