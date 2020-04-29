// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout3")
                .setLeft("8.380952380952381em")
                .setTop("4.571428571428571em")
                .setWidth("39.923809523809524em")
                .setHeight("28.038095238095238em")
                .setLayoutData({
                    "rows":6,
                    "cols":5,
                    "merged":[
                        {
                            "row":0,
                            "col":0,
                            "rowspan":3,
                            "colspan":5,
                            "removed":false
                        },
                        {
                            "row":4,
                            "col":0,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        }
                    ],
                    "rowSetting":{
                        "1":{
                            "manualHeight":50
                        },
                        "2":{
                            "manualHeight":50
                        },
                        "3":{
                            "manualHeight":50
                        },
                        "4":{
                            "manualHeight":50
                        },
                        "5":{
                            "manualHeight":50
                        },
                        "6":{
                            "manualHeight":50
                        }
                    },
                    "cells":{
                        "A1":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF",
                                "borderTop":"solid 1px #FFFFFF"
                            }
                        },
                        "B1":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF",
                                "borderTop":"solid 1px #FFFFFF"
                            }
                        },
                        "C1":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF",
                                "borderTop":"solid 1px #FFFFFF"
                            }
                        },
                        "D1":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF",
                                "borderTop":"solid 1px #FFFFFF"
                            }
                        },
                        "E1":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF",
                                "borderTop":"solid 1px #FFFFFF"
                            }
                        },
                        "A2":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF"
                            }
                        },
                        "B2":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "C2":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "D2":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "E2":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "A3":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "B3":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "C3":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "D3":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "E3":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "A4":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF"
                            }
                        },
                        "B4":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "C4":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "D4":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "E4":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "A5":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF"
                            }
                        },
                        "B5":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "C5":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "D5":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "E5":{
                            "style":{
                                "borderBottom":"solid 1px #FFFFFF",
                                "borderRight":"solid 1px #FFFFFF"
                            }
                        },
                        "A6":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderLeft":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "B6":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "C6":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "D6":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        },
                        "E6":{
                            "style":{
                                "borderRight":"solid 1px #FFFFFF",
                                "borderBottom":"solid 1px #FFFFFF"
                            }
                        }
                    },
                    "customBorders":[
                        {
                            "row":3,
                            "col":0,
                            "top":{
                                "color":"#FFFFFF",
                                "width":1
                            },
                            "right":{
                                "hide":true
                            },
                            "bottom":{
                                "hide":true
                            },
                            "left":{
                                "hide":true
                            }
                        },
                        {
                            "row":3,
                            "col":1,
                            "top":{
                                "color":"#FFFFFF",
                                "width":1
                            },
                            "right":{
                                "hide":true
                            },
                            "bottom":{
                                "hide":true
                            },
                            "left":{
                                "hide":true
                            }
                        },
                        {
                            "row":3,
                            "col":2,
                            "top":{
                                "color":"#FFFFFF",
                                "width":1
                            },
                            "right":{
                                "hide":true
                            },
                            "bottom":{
                                "hide":true
                            },
                            "left":{
                                "hide":true
                            }
                        },
                        {
                            "row":3,
                            "col":3,
                            "top":{
                                "color":"#FFFFFF",
                                "width":1
                            },
                            "right":{
                                "hide":true
                            },
                            "bottom":{
                                "hide":true
                            },
                            "left":{
                                "hide":true
                            }
                        },
                        {
                            "row":3,
                            "col":4,
                            "top":{
                                "color":"#FFFFFF",
                                "width":1
                            },
                            "right":{
                                "hide":true
                            },
                            "bottom":{
                                "hide":true
                            },
                            "left":{
                                "hide":true
                            }
                        }
                    ]
                })
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("39.695238095238096em")
                .setHeight("11.276190476190477em")
                .setCaption("单位信息")
                .setToggleBtn(false),
                "A1"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput15")
                .setName("A4")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.847619047619047em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none")
                .setType("date"),
                "A4"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput16")
                .setName("B4")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.923809523809524em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ]),
                "B4"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput17")
                .setName("C4")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.923809523809524em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none")
                .setType("number"),
                "C4"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setName("D4")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.923809523809524em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none"),
                "D4"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setName("A5")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("15.847619047619048em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none")
                .setLabelHAlign("left"),
                "A5"
            );
            
            host.xui_ui_formlayout3.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput18")
                .setName("C5")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setWidth("7.923809523809524em")
                .setHeight("3.7333333333333334em")
                .setLabelPos("none")
                .setType("popbox"),
                "C5"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});