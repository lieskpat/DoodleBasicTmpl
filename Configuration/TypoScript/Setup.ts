/*
 *    Project:  Typo3-Test - Typo3-Test
 *    Version:  1.0.0
 *    Date:    27.07.2017 13:18:44
 *    Author:  Lieske 
 *
 *    Coded with Netbeans!
 */

#| --- Page Config ------------------------------------------------------------------------------------ |#
config {
        concatenateCss = 0
        compressCSS = 0
        contentObjectExceptionHandler = 0
}

lib.content < styles.content.get
lib.content {
        select.where = colPos = {field: colPos}
        select.where.insertData = 1
}

#lib.bootstrap3-basic = COA
#lib.bootstrap3-basic {
lib.mainMenu = COA
lib.mainMenu {
    wrap = <nav class="navbar navbar-default"> <div class="container-fluid"> | </div> </nav>
 
    10 = COA
    10 {
        wrap = <div class="navbar-header"> | </div>
        10 = COA
        10 {
            // hamburger icon:
            wrap = <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">|</button>
            10 = TEXT
            10.value = <span class="sr-only">Toggle navigation</span>
            20 = TEXT
            20.value = <span class="icon-bar"></span>
            21 < .20
            22 < .20
        }
 
        // company name/logo:
        20 = TEXT
        20.value = Extbase
        20.typolink {
            parameter = http://192.168.81.128/web/index.php?id=8
            ATagParams = class="navbar-brand"
        }
    }
 
    20 = HMENU
    20 {
        wrap = <div id="navbar" class="navbar-collapse collapse"> <ul class="nav navbar-nav"> | </ul> </div>
 
        1 = TMENU
        1 {
            expAll = 1
 
            NO = 1
            NO {
                ATagTitle.field = title
                wrapItemAndSub = <li>|</li>
            }
 
            CUR < .NO
            CUR {
                wrapItemAndSub = <li class="active">|</li>
            }
 
            ACT < .CUR
 
            IFSUB = 1
            IFSUB {
                ATagTitle.field = title
                ATagParams = class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"
                linkWrap = |<b class="caret"></b>
                ATagBeforeWrap = 1
                wrapItemAndSub = <li class="dropdown">|</li>
            }
 
            ACTIFSUB < .IFSUB
            ACTIFSUB {
                wrapItemAndSub = <li class="dropdown active">|</li>
            }
 
            CURIFSUB < .ACTIFSUB
        }
 
        2 < .1
        2 {
            wrap = <ul class="dropdown-menu">|</ul>
 
            // because default Bootstrap 3 doesn't support more submenu levels:
            IFSUB >
            ACTIFSUB >
            CURIFSUB >
 
            SPC = 1
            SPC {
                // no divider, if first menu item on this level (using optionSplit):
                wrapItemAndSub = <li class="dropdown-header">|</li> |*| <li class="divider"></li><li class="dropdown-header">|</li>
            }
        }
    }
}

#lib.mainMenu = HMENU
#lib.mainMenu {

#    wrap = <ul>|</ul>
#    1 = TMENU
#    1 {
#        expAll = 1
#        NO = 1
#        NO {
#            wrapItemAndSub = <li>|</li>       
#        }
#        CUR = 1
#        CUR {
#        wrapItemAndSub = <li>|</li>
#         #doNotLinkIt = 1
#      }
#
#    }

#    2 = TMENU
#    2 < .1 
#    
#    3 = TMENU
#    3.wrap = <ul>|</ul>
#    3.NO.wrapItemAndSub = <li>|</li>
#}


#lib.mainMenu = HMENU
#lib.mainMenu {
#        1 = TMENU
#        1.wrap = <ul>|</ul>
#        1.expAll = 1
#        1.NO.wrapItemAndSub = <li>|</li>
#        1.ACT = 1
#        1.ACT.wrapItemAndSub = <li class="selected">|</li>
#        1.IFSUB.wrapItemAndSub = <li>|</li>
        
#        2 = TMENU
#        2.wrap = <ul id="subMenu">|</ul>
#        2.NO.wrapItemAndSub = <li>|</li>
#}

lib.breadCrumb = HMENU
lib.breadCrumb {
        special = rootline
        special.range = 1|-1
        1 = TMENU
        1.NO.doNotLinkIt = |*| 0 |*| 1
        1.NO.allWrap = |*| |&nbsp;&raquo;&nbsp; |*| |
}

lib.siteTitle = TEXT
lib.siteTitle.data = page:title

lib.copyright = TEXT
lib.copyright {
        data = date:U
        strftime = %Y
        wrap = &copy;&nbsp;
}

page = PAGE
page.typeNum = 0
page.10 = TEXT
page.10.value = Meine Seite

template = FLUIDTEMPLATE
template {
        
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
                key.data = pagelayout
                default = TEXT
                default.value = FirstTemplate
                2 = TEXT
                2.value = TwoColumnTemplate
        }

        templateRootPaths {
		10 = {$systemPath}Private/Templates/
        }
        
        layoutRootPaths {
                10 = {$systemPath}Private/Layouts/
        }

        partialRootPaths {
                10 = {$systemPath}Private/Partials/
        }

        variables {
                copyright < lib.copyright
                mainMenu < lib.mainMenu
                breadCrumb < lib.breadCrumb
        }
}

page {
      
        10 < template

        includeCSS {
		#mycss = {$systemPath}Public/Stylesheets/style.css
		bootstrapcss = {$systemPath}Public/Stylesheets/Bootstrap/css/bootstrap.min.css
                #mycss = {$systemPath}Public/Stylesheets/fastFertigesStylesheet.css
        }
}


#| --- Header & Body ---------------------------------------------------------------------------------- |#


#| --- Template --------------------------------------------------------------------------------------- |#


#| --- Markers & Subparts ----------------------------------------------------------------------------- |#

