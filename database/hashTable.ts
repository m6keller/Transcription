

// let InstructionMap;
// ///exploreing how a hash table works

// function hashStringToInt(s: string, tableSize: number ) : number {
//     let hash = 3;

//     for( let i: number = 0; i < s.length; i ++ ) {
//         hash = 13 * hash * s.charCodeAt(i) % tableSize;
//     }

//     return hash;
// }

// class Hashmap {
//     map = new Array(1061);
//     numItems: number = 0;
//     loadFactor = this.numItems / this.map.length;

//     resize = () => {
//         const newMap = new Array( this.map.length );
//         this.map.forEach(item => {
//             if( item ) {
//                 item.forEach(([key ,value ]) => {
//                     const idx: number = hashStringToInt( key, newMap.length);
//                     if (this.table[idx])



//                     newMap[idx] = value;
//                 })
//             }
//         })
//     }

//     setItem = (key: string, value: string) => {
//         this.numItems ++;
//         const loadFactor: number = this.numItems / this.map.length;
//         if( loadFactor > .8 ) {

//         }
//         const idx: number = hashStringToInt(key, this.map.length);
//         this.map[idx] = [[key, value]];
//     }
    
//     getItem = (key: string) => {
//         const idx: number = hashStringToInt(key, this.map.length);
//         if( !this.map[idx] ) return null;
//         return this.map[idx].find( x => x[0] === key)[1];
//     };

// }

// const myMap = new Hashmap;

// myMap.setItem( "firstName", "bob" );
// myMap.getItem( "bob" );
