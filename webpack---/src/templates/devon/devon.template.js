import React from "react"
import createTemplate from "../../create-template"
import {
    useDialogState,
    Dialog,
    DialogBackdrop
} from "reakit/Dialog"

import {
    useComponents
} from "../../components"

function Devon({
    editing,
    styles,
    ...props
}) {
    const Elements = useComponents()
    const checkboxes_color = styles.forElement("modal_content").color

    const dialog = useDialogState()

    const linkDefaults = {
        settings: {
            radius: "0",
            shadow: "none",
            columns: 1,
            backgroundColor: "#2c2c2c",
            textColor: "#eae9e7",
            iconBorder: "0",
            iconBorderColor: "#eae9e7",
            fontSize: "16",
            fontWeight: "bold",
            iconColorStyle: "custom",
            iconColor: "#eae9e7",
            linkBorder: "3px",
            linkBorderColor: "#eae9e7"
        },
        children: [{
                type: "Link",
                url: "https://twitter.com",
                text: "Follow me on Twitter",
                icon: "twitter",
                hasIcon: "none"
            },
            {
                type: "Link",
                url: "https://dribbble.com",
                text: "View my design portfolio",
                icon: "dribbble",
                hasIcon: "none"
            },
            {
                type: "Link",
                url: "https://twitch.com",
                text: "Subscribe on Twitch",
                icon: "twitch",
                hasIcon: "none"
            },
            {
                type: "Link",
                url: "https://instagram.com",
                text: "Follow me on Instagram",
                icon: "instagram",
                hasIcon: "none"
            }
        ]
    }

    const iconDefaults = {
        settings: {
            iconStyle: "round",
            iconColor: "#baed08",
            iconColorStyle: "custom",
            iconAlignment: "center",
            iconBackgroundColor: "transparent"
        },
        children: [{
                type: "Icon",
                url: "https://twitter.com/convertkit",
                iconName: "twitter"
            },
            {
                type: "Icon",
                url: "https://instagram.com/convertkit",
                iconName: "instagram"
            },
            {
                type: "Icon",
                url: "https://facebook.com",
                iconName: "facebook-f"
            },
            {
                type: "Icon",
                url: "https://youtube.com/convertkit",
                iconName: "youtube"
            }
        ]
    }

    return ( <
        Elements.LandingPage styles = {
            styles
        } { ...props
        }
        style = {
            styles.forElement("page")
        } >
        <
        div className = "formkit-wrapper" >
        <
        div style = {
            {
                backgroundColor: styles.forElement("background").backgroundColor
            }
        }
        className = "formkit-bg-color" /
        >
        <
        div style = {
            styles.forElement("background")
        }
        className = "formkit-bg-image" /
        >
        <
        div className = "formkit-container"
        style = {
            styles.forElement("container")
        }
        role = "main" >
        <
        Elements.Image className = "formkit-form-image"
        name = "image"
        defaults = {
            {
                src: "https://embed.filekitcdn.com/e/2owDSJCEZcjwZhVLK4rMrK/5wmoTupAMEqC6tB7hPsbBd?w=1000"
            }
        }
        /> <
        div className = {
            `formkit-content-container ${
              editing ? "formkit-editing" : ""
            }`
        } >
        <
        Elements.Heading className = "formkit-heading"
        name = "heading"
        defaults = {
            {
                content: "Max Tan"
            }
        }
        /> <
        Elements.Region className = "formkit-content"
        group = "content_region"
        name = "content" >
        <
        Elements.Content defaults = {
            {
                content: "Fashion Designer & Blogger"
            }
        }
        /> <
        /Elements.Region> {
            editing && ( <
                button onClick = {
                    dialog.show
                }
                type = "button"
                style = {
                    {
                        background: "rgba(255,255,255,0.75)",
                        cursor: "pointer",
                        display: "block",
                        fontSize: 18,
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        padding: "8px 8px",
                        outline: 0,
                        width: "200px",
                        margin: "0 auto",
                        marginBottom: "20px"
                    }
                } >
                Click to edit the form <
                /button>
            )
        } <
        Elements.Button className = "formkit-dialog-button"
        name = "dialog_button"
        type = "button"
        onClick = {
            dialog.show
        }
        defaults = {
            {
                content: "Subscribe to my newsletter"
            }
        }
        /> <
        Elements.Region className = "formkit-collection-container"
        group = "content_region"
        name = "content_lower" >
        <
        Elements.Links defaults = {
            linkDefaults.settings
        }
        defaultChildren = {
            linkDefaults.children
        }
        /> <
        Elements.Content defaults = {
            {
                content: ""
            }
        }
        /> <
        /Elements.Region> <
        /div> <
        /div> <
        div className = "formkit-footer-container"
        role = "complementary" >
        <
        Elements.Region name = "footer_region" >
        <
        Elements.Icons defaults = {
            iconDefaults.settings
        }
        defaultChildren = {
            iconDefaults.children
        }
        /> <
        Elements.Content defaults = {
            {
                content: ""
            }
        }
        /> <
        /Elements.Region> <
        /div> <
        DialogBackdrop { ...dialog
        }
        className = "formkit-dialog-overlay"
        style = {
            {
                position: editing ? "absolute" : "fixed"
            }
        } >
        <
        div className = "formkit-modal-container" >
        <
        Dialog { ...dialog
        }
        className = "formkit-dialog"
        style = {
            styles.forElement("form")
        }
        unstable_portal = {
            false
        } { ...(editing ? {
                modal: false,
                hideOnClickOutside: false
            } : {})
        } >
        <
        Elements.Heading className = "formkit-heading"
        name = "modal_heading"
        defaults = {
            {
                content: "Join my newsletter"
            }
        }
        /> <
        Elements.Content className = "formkit-modal-content"
        name = "modal_content"
        defaults = {
            {
                content: "Each week on my newsletter I send out great content on design. Subscribe below."
            }
        }
        /> <
        Elements.Form >
        <
        Elements.Errors / >
        <
        Elements.CustomFields style = {
            {
                color: checkboxes_color
            }
        } >
        <
        Elements.AddFieldButton / >
        <
        Elements.Button name = "submit"
        group = "button"
        defaults = {
            {
                content: "Subscribe to my newsletter"
            }
        }
        /> <
        /Elements.CustomFields> <
        /Elements.Form> <
        Elements.Content className = "formkit-disclaimer"
        name = "disclaimer"
        defaults = {
            {
                content: "I won’t send you spam. Unsubscribe anytime."
            }
        }
        /> <
        /Dialog> <
        button className = "formkit-modal__close"
        aria - label = "Close"
        onClick = {
            dialog.hide
        } >
        <
        svg aria - hidden = "true"
        focusable = "false"
        data - prefix = "fal"
        data - icon = "times"
        role = "img"
        xmlns = "http://www.w3.org/2000/svg"
        viewBox = "0 0 320 512" >
        <
        path style = {
            styles.forElement("close_button")
        }
        fill = "#ffffff"
        d = "M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" /
        >
        <
        /svg> <
        /button> <
        /div> <
        /DialogBackdrop> <
        /div> <
        Elements.BuiltWith background = "background"
        image = "background" / >
        <
        /Elements.LandingPage>
    )
}

export default createTemplate(Devon, {
    name: "Devon"
})