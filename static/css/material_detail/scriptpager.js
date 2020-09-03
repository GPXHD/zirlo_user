

//打印页码
function PrintPage(currentPage, pageSize, totalCount, fun, param) {
    var html = "";
    var totalPage = 0;
    if (totalCount % pageSize == 0) {
        totalPage = parseInt(totalCount / pageSize);
    } else {
        totalPage = parseInt(totalCount / pageSize) + 1;
    }
    if (totalPage > 1) {
        var showCount = 7;
        if (currentPage > 1) {
            html += "<a class=\"pager-back\" href=\"javascript:;\" onclick=\"" + fun + "(1)\" languageattribute='PageHomePage'></a>";
            html += "<a class=\"pager-back\" href=\"javascript:;\" onclick=\"" + fun + "(" + parseInt(currentPage - 1) + param + ")\" languageattribute='ThePreviousPage'></a>";
        }
        var startPage, endPage;
        if (totalPage <= showCount) {
            startPage = 1;
            endPage = totalPage;
        } else {
            startPage = currentPage - 3;
            endPage = currentPage + 3;
            if (startPage <= 0) {
                endPage = endPage - startPage + 1;
                startPage = 1;
            }
            if (endPage > totalPage) {
                startPage = startPage + (totalPage - endPage);
                endPage = totalPage;
            }
        }
        for (var i = startPage; i <= endPage; i++) {

            if (i == currentPage) {
                html += "<a class=\"pager-current\" href=\"javascript:;\" onclick=\"" + fun + "(" + parseInt(i) + param + ")\">" + i + "</a>";
            } else {
                html += "<a href=\"javascript:;\" onclick=\"" + fun + "(" + parseInt(i) + param + ")\">" + i + "</a>";
            }
        }

        if (currentPage < totalPage) {
            html += "<a class=\"pager-next\" href=\"javascript:;\" onclick=\"" + fun + "(" + parseInt(currentPage + 1) + param + ")\" languageattribute='TheNextPage'></a>";
        }
        if (currentPage != totalPage) {
            html += "<a class=\"pager-back\" href=\"javascript:;\" onclick=\"" + fun + "(" + totalPage + ")\" languageattribute='PageBack'></a>";
        }
    }
    if (totalPage > 1 && totalCount > 0) {
        var startIndex = (currentPage - 1) * pageSize + 1;
        var endIndex = currentPage * pageSize;
        if (endIndex > totalCount) {
            endIndex = totalCount;
        }
        //html += " <i languageattribute='PageNumber'></i>" + startIndex + " <i languageattribute='PageNumberToEnd'></i>" + endIndex +;
        html += "<i languageattribute='PageCounts'  style='font-style: normal;'></i> <i languageattribute='ATotalOf' style='font-style: normal;'></i> " + totalCount + " <i languageattribute='Records'  style='font-style: normal;'></i>";
    }
    else {
        if (totalCount > 0) {
            html += "<i languageattribute='ATotalOf'  style='font-style: normal;'></i> " + totalCount + " <i languageattribute='Records'  style='font-style: normal;'></i>";
        }

    }
    return html;
}


//打印页码
function AdminPanel_PrintPage(currentPage, pageSize, totalCount, fun, param, centSize) {
    var html = "";
    var totalPage = 0;
    if (totalCount % pageSize == 0) {
        totalPage = parseInt(totalCount / pageSize);
    } else {
        totalPage = parseInt(totalCount / pageSize) + 1;
    }

    var firstBtn = "<a  href=\"javascript:void(0);\" onclick=\"" + fun + "(" + parseInt(currentPage - 1) + param + ")\" languageattribute='ThePreviousPage'></a>";
    var lastBtn = "<a href=\"javascript:void(0);\"  onclick=\"" + fun + "(" + parseInt(parseInt(currentPage) + 1) + param + ")\"  languageattribute='TheNextPage'></a>";
    var firstStr = "<a href=\"javascript:void(0);\"  onclick=\"" + fun + "(" + 1 + param + ")\">1</a>";
    var lastStr = "<a href=\"javascript:void(0);\"  onclick=\"" + fun + "(" + totalPage + param + ")\">" + totalPage + "</a>";

    if (currentPage <= 1) {
        firstBtn = "<span class=\"disabled\" languageattribute='ThePreviousPage'></span>";
    }
    if (currentPage >= totalPage) {
        lastBtn = "<span class=\"disabled\" languageattribute='TheNextPage'></span>";
    }

    if (currentPage == 1) {
        firstStr = "<span class=\"current\">1</span>";
    }

    if (currentPage >= totalPage) {
        lastStr = "<span class=\"current\">" + totalPage + "</span>";
    }

    var firstNum = parseInt(currentPage) - (centSize / 2); //中间开始的页码
    if (currentPage < centSize)
        firstNum = 2;
    var lastNum = parseInt(currentPage) + centSize - ((centSize / 2) + 1); //中间结束的页码

    if (lastNum >= totalPage)
        lastNum = totalPage - 1;
    html += "<span><i languageattribute='ATotalOf'  style='font-style: normal;'></i> " + totalCount + " <i languageattribute='Record' style='font-style: normal;'></i></span>";
    html += firstBtn + firstStr;
    if (currentPage >= centSize && centSize != 0) {
        html += "<span>...</span>\n";
    }
    for (var i = firstNum; i <= lastNum; i++) {
        if (i == currentPage) {
            html += "<span class=\"current\">" + i + "</span>";
        }
        else {

            html += "<a href=\"javascript:void(0);\"  onclick=\"" + fun + "(" + parseInt(i) + param + ")\">" + i + "</a>";
        }
    }
    if (centSize != 0 && totalPage - currentPage > centSize - ((centSize / 2))) {
        html += "<span>...</span>";
    }
    if (totalPage == 1 || totalPage == 0) {
        html += lastBtn;
    } else {
        html += lastStr + lastBtn;
    }
    return html;
}