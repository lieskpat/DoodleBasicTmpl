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

lib.mainMenu = HMENU
lib.mainMenu {

    wrap = <ul>|</ul>
    1 = TMENU
    1 {
        expAll = 1
        NO = 1
        NO {
            wrapItemAndSub = <li>|</li>       
        }
        CUR = 1
        CUR {
         wrapItemAndSub = <li class="selected">|</li>
         #doNotLinkIt = 1
      }

    }

    2 = TMENU
    2 < .1 
    
    3 = TMENU
    3.wrap = <ul id="subMenu">|</ul>
    3.NO.wrapItemAndSub = <li>|</li>
}


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
                mycss = {$systemPath}Public/Stylesheets/fastFertigesStylesheet.css
        }
}


#| --- Header & Body ---------------------------------------------------------------------------------- |#


#| --- Template --------------------------------------------------------------------------------------- |#


#| --- Markers & Subparts ----------------------------------------------------------------------------- |#

