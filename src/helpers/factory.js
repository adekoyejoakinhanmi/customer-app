/*jshint esversion:6*/

/* This ideally isn't a best practice as data is still vulnerable
 * Actually, this should be performing a server request
 */
export default class Factory{
    constructor(data) {
        this._data = data;
    }

    getAll() {
        return this._data;
    }

    addOne(firstName, lastName, city) {
        let topID = this._data.length + 1;
        this._data.push({
            id : topID,
            firstName : firstName,
            lastName : lastName,
            city : city
        });
    }

    getOne(id) {
        let index,
            data = this._data,
            len = data.length;

        /* Fun Fact
         * The traditional for loop is more efficient here than
         * the forEach higher order function.
         */
        for (index = 0; index < len; index += 1) {
            if (data[index].id === id) {
                return data[index];
            }
        }
        return null;
    }

    removeOne(id) {
        let index,
            data = this._data,
            len = data.length;

        /* Splice Loop
         * Normally, I would have looped forward but from
         * Dan Wahlin's Code Sample in AngularJS demos,
         * He loops backward. There must be a reason for
         * this. Perhaps this is for speed.
         */
        for (index = len - 1; index >= 0; index -= 1) {
            if (data[index].id === id) {
                data.splice(index, 1);
                break;
            }
        }
    }
}
