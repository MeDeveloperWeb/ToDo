import htmlEl from "../../utils/render"

export default function icon (name, htmlOptions = {}) {
    if (!htmlOptions.props) htmlOptions.props = {};
    htmlOptions.props["data-feather"] = name

    return htmlEl({
        ...htmlOptions,
        tag: "i"
    })
}