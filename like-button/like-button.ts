
export class LikeButtonComponent {

    private _isSelected: boolean;

    constructor(private _likes: number){
        this._isSelected = false;
    }

    Clicked(){
        if (this._isSelected){
            this._likes -= 1;
            this._isSelected = false;
        }
        else{
            this._likes += 1;
            this._isSelected = true;
        }
    }

    get isSelected(){
        return this._isSelected;
    }

    get likes(){
        return this._likes;
    }
}