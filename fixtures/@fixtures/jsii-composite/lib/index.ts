export interface IVeryBaseInterface {
    foo(): void;
}

export interface VeryBaseProps {
    readonly foo: Very;
}

/**
 * Something here
 * @experimental
 */
export class Very {
    public hey() {
        return 42;
    }
}

export class StaticConsumer {
  private constructor() {}

  public static consume(..._args: any[]): void {
    return;
  }
}
