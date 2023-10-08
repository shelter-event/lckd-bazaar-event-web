class ZustandState<T> {
    constructor(
        readonly data: T,
        readonly loading: boolean = false,
        readonly error: any = null,
    ) { }
}

export default ZustandState