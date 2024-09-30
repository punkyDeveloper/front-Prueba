// store.d.ts
declare module './store.ts' {
    import { Store } from 'redux';
    
    const store: Store; // Define el tipo de tu store
    export default store;
}