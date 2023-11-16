class WeekOfYear {
    getInfo() {
        return {
            "id": "weekofyear",
            "name": "Week of Year",
            "blocks": [
                {
                    "opcode": "currentWeek",
                    "blockType": "reporter",
                    "text": "current week",
                }
            ],
        };
    }

    currentWeek() {
        const currentDate = new Date();
        const weekNumber = this.getWeekNumber(currentDate);
        return weekNumber;
    }

    getWeekNumber(date) {
        date = new Date(date.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        const yearStart = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
        return weekNumber;
    }
}

Scratch.extensions.register(new WeekOfYear());
