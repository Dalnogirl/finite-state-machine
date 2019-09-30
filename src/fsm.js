class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config;
        this.state = config.initial;
        this.history = [config.initial];
        this.index = 0;
        this.counter = 0;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (Object.keys(this.config.states).includes(state)) {
            this.state = state;
            this.history.push(this.state);
            this.index = this.history.length - 1; // last element in history
        } else {
            throw new Error('Error');
        }
        
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        event
        let condition = this.state;
        condition
        for (let key in this.config.states[condition].transitions) {
            if (key === event) {
                key
                this.state = this.config.states[condition].transitions[key];
                this.history.push(this.state);
                this.index = this.history.length - 1; // last element in history;
                return true;
            }
        }
        throw new Error('Error');
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.state = 'normal';
        this.history.push(this.state);
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        let arr = [];
        if (event !== undefined && event.length > 0) {
            event
            for (let i in this.config.states) {
                for (let key in this.config.states[i].transitions) {
        
                    if (key === event) {
        
                        arr.push(i);
                    }
                }
            }
            return arr;
        } else {
            return Object.keys(this.config.states);
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
 
        if (this.index === 0) {
          
            return false
        } else {
            this.counter++
            this.index--;
  
            this.state = this.history[this.index];
            this.history.push(this.state);
            return true;
        }

    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
 
        if (this.index <  0 | this.index >= this.history.length - 1 | this.counter < 1) {
            return false;
        } else {
            this.index ++;
            this.state = this.history[this.index];
            this.counter--;
            return true;

        }

    }

    /**
     * Clears transition history
     */
    clearHistory() {
        this.history = ['normal'];
        this.index = 0;
    }
}

//let hleb = new FSM(config);

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
