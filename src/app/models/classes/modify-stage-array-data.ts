export class ModifyStageArrayData {
    gameLevelResultAndRating: any;
    testStageStars: any[] = [];
    totalStarNumber: number = 5;
    constructor(gameLevelResultAndRating: any) {
        this.gameLevelResultAndRating = gameLevelResultAndRating
    }

    modifyStageArray() {
        if (this.gameLevelResultAndRating) {
            console.log("this.gameLevelResultAndRating: ", this.gameLevelResultAndRating)
            this.gameLevelResultAndRating.forEach((stage: any) => {
                let starArray: any[] = [];
                for (let i = 0; i < stage.rating; i++) {
                    starArray.push({ isDone: true });                }
                for (let i = 0; i < this.totalStarNumber - Math.round(stage.rating); i++) {
                    starArray.push({ isDone: false });
                }
                let x: any = { ...stage, starArray: starArray };
                this.testStageStars.push(x);
            });
        }
        return this.testStageStars;
    }
}
