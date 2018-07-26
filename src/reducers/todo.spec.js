import reducer from './todo';

describe("Todo Reducer", ()=>{
    test("return a state object",()=>{
        const result = reducer(undefined,{TYPE:'ANYTHING'})
        expect(result).toBeDefined()
    })
})

describe('Add Todo', () => {
  test('should add new to do', () => {
        const startState = {
            todos:[
                {id:1, name:'task 1', isComplete:true}
            ]
        }
        const expectedState = {
            todos:[
                {id:1, name:'task 1', isComplete:true},
                {id:2, name:'task 2', isComplete:false}
            ]
        }
        const action = {type:'ADD_TODO',payload:{id:2, name:'task 2', isComplete:false}}
        const result = reducer(startState,action);

        expect(result).toEqual(expectedState)
  })
  
})

