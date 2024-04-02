import { H1, H2, H3, H4, H5 } from '../../../../AbstractElements'
import { Heading1, SubHeading, h1, h2, h3, h4, h5, h6 } from '../../../../Utils/Constants'

export default function ColoredHeadBody() {
    return (
        <tbody>
            <tr>
                <td><code>{h1}</code></td>
                <td>
                    <H1><span className="txt-primary"> {Heading1}</span>{SubHeading}</H1>
                </td>
            </tr>
            <tr>
                <td><code>{h2}</code></td>
                <td>
                    <H2><span className="txt-secondary"> {Heading1}</span>{SubHeading}</H2>
                </td>
            </tr>
            <tr>
                <td><code>{h3}</code></td>
                <td>
                    <H3><span className="txt-success"> {Heading1}</span>{SubHeading}</H3>
                </td>
            </tr>
            <tr>
                <td><code>{h4}</code></td>
                <td>
                    <H4><span className="txt-info"> {Heading1}</span>{SubHeading}</H4>
                </td>
            </tr>
            <tr>
                <td><code>{h5}</code></td>
                <td>
                    <H5><span className="txt-warning"> {Heading1}</span>{SubHeading}</H5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{h6}</code></td>
                <td className="pb-0">
                    <H5><span className="txt-danger"> {Heading1}</span>{SubHeading}</H5>
                </td>
            </tr>
        </tbody>
    )
}