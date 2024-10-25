import { createRoot, createSignal } from "solid-js";

// Type definition for our store state
type StoreState = {
  count: number;
  message: string;
};

// Type definition for our store actions
type StoreActions = {
  increment: () => void;
  setMessage: (message: string) => void;
};

// Combined store type
type Store = {
  state: StoreState;
  actions: StoreActions;
};

// Create the store in a root context to prevent disposal
function createStore() {
  return createRoot(() => {
    const [count, setCount] = createSignal(0);
    const [message, setMessage] = createSignal("");

    // Create store state
    const state: StoreState = {
      get count() {
        return count();
      },
      get message() {
        return message();
      },
    };

    // Create store actions
    const actions: StoreActions = {
      increment() {
        setCount((c) => c + 1);
      },
      setMessage(newMessage: string) {
        setMessage(newMessage);
      },
    };

    return { state, actions };
  });
}

// Create a singleton instance
const store = createStore();

// Export a function to access the store
export function useStore(): Store {
  return store;
}

// Usage example:
// const { state, actions } = useStore();
// actions.increment();
// console.log(state.count);