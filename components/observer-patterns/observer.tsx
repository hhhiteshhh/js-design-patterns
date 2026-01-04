type ObserverFn<T = any> = (value: T) => void;

class LoginObservable {
  private observers: ObserverFn[] = [];

  subscribe(func: ObserverFn) {
    this.observers.push(func);
    // Optionally: console.log(this.observers);
  }

  unsubscribe(func: ObserverFn) {
    this.observers = this.observers.filter((f) => f !== func);
  }

  notify(value: any) {
    this.observers.forEach((observer) => observer(value));
  }
}

export default new LoginObservable();
