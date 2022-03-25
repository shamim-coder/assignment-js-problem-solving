// task 01

function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}

// task 02

function pandaCost(singaraQuantity, samosaQuantity, jalebiQuantity) {
    if (arguments.length != 3) {
        return "input singara's, samosa's and jalebi's quantity separate by ','";
    } else if (
        typeof singaraQuantity != "number" ||
        typeof samosaQuantity != "number" ||
        typeof jalebiQuantity != "number"
    ) {
        return "only input number";
    } else {
        const singaraPrice = 7;
        const samosaPrice = 10;
        const jalebiPrice = 15;

        let totalSingaraPrice = singaraPrice * singaraQuantity;
        let totalSamosaPrice = samosaPrice * samosaQuantity;
        let totalJalebiPrice = jalebiPrice * jalebiQuantity;

        let totalPrice =
            totalSingaraPrice + totalSamosaPrice + totalJalebiPrice;

        return totalPrice;
    }
}
console.log(pandaCost(8, 4, 4));

// task 03

function picnicBudget(numberOfTraveler) {
    if (numberOfTraveler < 0 || typeof numberOfTraveler != "number") {
        return "input valid and positive number";
    } else {
        let totalBudget = 0;
        if (numberOfTraveler <= 100) {
            totalBudget = numberOfTraveler * 5000;
        } else if (numberOfTraveler > 100 && numberOfTraveler <= 200) {
            let first100Cost = 100 * 5000;
            let restCost = (numberOfTraveler - 100) * 4000;
            totalBudget = first100Cost + restCost;
        } else if (numberOfTraveler > 200) {
            let first100Cost = 100 * 5000;
            let second100Cost = 100 * 4000;
            let restCost = (numberOfTraveler - 200) * 3000;
            totalBudget = first100Cost + second100Cost + restCost;
        }
        return totalBudget;
    }
}

// task 04

function oddFriend(friends) {
    if (typeof friends != "object") {
        return "Input only friends list";
    } else {
        for (let i = 0; i < friends.length; i++) {
            if (typeof friends[i] != "string") {
                return "input only string";
            } else if (friends[i].length % 2 != 0) {
                let friend = friends[i];
                return friend;
            }
        }
        return "you have't any odd friend";
    }
}
