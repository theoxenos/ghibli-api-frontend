import {Fragment, type ReactNode} from "react";

const SkeletonList = ({amount, children}: { amount: number, children: ReactNode }) => (
    <>
        {Array.from({length: amount}).map((_, index) => (
            <Fragment key={index}>{children}</Fragment>
        ))}
    </>
);

export default SkeletonList;