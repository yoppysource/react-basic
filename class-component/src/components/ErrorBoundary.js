import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false};
    }
    // 하위 컴포넌트에서 에러가 발생했을때 트리거 된다
    componentDidCatch(error) {
        this.setState({hasError: true});
        console.log(error);
    }

    render() {
        if(this.state.hasError) {
            return <p>Something went wrong</p>
        }
        return this.props.children;
    }
}
