$(function () {
  var header = $('#wap .header')
  var content = $('#wrap .content')
  var liList = $('#wap .content .list')
  var nList = $('.navList li')
  var dList = $('#wap .content .dot li ')
  var lList = $('#wap .content .list>li')

  var now = 0
  var index = 0
  var presentIndex = 0

  //动画
  var anmiations = [
    //抽象派
    {
      in: function () {
        // 设置我们的入场动画逻辑
      },
      out: function () {
        // 设置我们的出场动画逻辑
      }
    },
    //人物油画
    {
      in: function () {
        // 设置我们的入场动画逻辑
      },
      out: function () {
        // 设置我们的出场动画逻辑
      }

    },
    //绽放
    {
      in: function () {
        // 设置我们的入场动画逻辑
      },
      out: function () {
        // 设置我们的出场动画逻辑
      }
    },
    //植物景观
    {
      in: function () {
        // 设置我们的入场动画逻辑
      },
      out: function () {
        // 设置我们的出场动画逻辑
      }
    }
  ]

  switchover()
  //点击切换
  function switchover() {
    $.each(nList,function (i) {
      nList[i].index = i 
      $(nList[i]).on('click',function () {
        presentIndex = now
        move(this.index)
        now = this.index
      })
    })
    $.each(dList,function (i) {
      dList[i].index = i
      $(dList[i]).on('click',function () {
        presentIndex = now
        move(this.index)
        now = this.index
      })
    })
  }
  contentHeight()
  //内容区的高度
  function contentHeight() {
    // 设置内容区的高度   视口高度 - 头部的高度
    $('#wrap .content').height(document.documentElement.clientHeight - header.outerHeight() +'px')
    // 循环遍历设置每个li的高度
    $.each(lList,function (i) {
      $(lList[i]).height(document.documentElement.clientHeight - header.outerHeight() + 'px')
    })
  }
  //同步主导航及侧边导航
  function move(index) {
    // 设置头部导航的样式
    $.each(nList,function (i) {
      $(nList[i]).attr('class','')
    })
    $(nList[index]).addClass('active')
    // 设置右侧导航的样式
    $.each(dList,function (i) {
      $(dList[i]).attr('class','')
    })
    $(dList[index]).addClass('active')
    // 设置内容区中的li的移动
    $(liList).css({
      top: -index*(document.documentElement.clientHeight - header.outerHeight())
    })
  }
})
