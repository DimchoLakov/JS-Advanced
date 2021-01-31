function hydrateWorker(worker) {
    if (worker.dizziness === true) {
        let water = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += water;
        worker.dizziness = false;
    }

    return worker;
}

console.log(
    hydrateWorker({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true
    }));

console.log(
    hydrateWorker({
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    }));