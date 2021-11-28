<div class="moby__aside-holder">
    <!-- Vertical Aside Navigation -->
    <div class="moby__side-bar">

        <!-- Side Bar Header -->
        <div class="side-bar-header">
            <a href="#" class="logo">
                <img src="{{$apps['favicon']}}" alt="logo">
            </a>
            <i id="menu-btn" class="icon-menu icon drawer-icon"></i>
            <span id="drawer-icon" class="menu-icon"><i class="icon icon-menu"></i></span>
            <a href="#" class="test-aside hide">TEST ASIDE</a>
        </div>

        <!-- /.Side Bar Header -->
        <ul class="moby__drawer-menu scroller">

        </ul>
    </div>
    <!-- Vertical Aside Navigation -->
</div>

<script>


$('.test-aside').click(function(e)
{
    e.preventDefault();
});

function getaside()
{
    $.ajax({
        type: "GET",
        url: config.apps.URL_API + '/api/menu/aside?level='+getaccount().level,
        headers:{
            "Content-Type":"application/json",
            "key":getaccount().key
        },
        cache: false,
        timeout: 18000,
        dataType: 'JSON',
        success: function(n)
        {
            // console.log(n);
            var li = '';
            $.each(n, function(i, item)
            {
                // li += '<li>'+item.name+'</li>';
                if( item.child === '')
                {
                    li += '<li><a href="{{$apps['URI']}}'+item.url+'" class="'+item.class+'" ><i class="'+item.icon+'"><span class="path1"></span></i><span class="menu-item-title">'+item.title+'</span></a></li>';
                }
                else
                {
                    li += '<li>';
                        li += '<a href="#'+item.type+i+'" data-toggle="collapse" aria-expanded="false"><i class="'+item.icon+'"><span class="path1"></span><span class="path2"></span></i><span class="menu-item-title">'+item.title+'</span><i class="'+item.arrow+'"></i></a>';

                    li += '<div class="collapse show" id="'+item.type+i+'"><ul>';
                        $.each(item.child, function(y, x)
                        {
                            li += '<li><a href="{{$apps['URI']}}'+x.url+'" data-role="collapse"><span>'+x.title+'</span></a></li>';
                        })
                        
                    li += '</ul></div>';

                li +='</li>';
                }
            });


            //
            $('body').find('ul.moby__drawer-menu').html(li);

            var loc = location.href;
            var area = $('.moby__side-bar ul').find('a[href="'+loc+'"]');
        
            area.addClass('active');
        
            if( $('.moby__side-bar ul').find('a[href="'+loc+'"]').attr('data-role') === 'collapse' )
            {

                area_ext = area.parents('.collapse');
        
                area_ext.addClass('show');
                $('.moby__side-bar ul').find('a[href="#'+area_ext.attr('id')+'"]').addClass('active');
                $('.moby__side-bar ul').find('a[href="#'+area_ext.attr('id')+'"]').attr('aria-expanded', 'true');
                area.addClass('active');
            }

        },
        error: function(n)
        {
            console.log(n);
            alert("Opss.. Terjadi kesalahan tidak diketahui, refresh kembali halaman ini");
        }
    });
}

getaside();

function splashaside()
{
    var aside = $('body').find('ul.moby__drawer-menu');

    aside.html('');
    var li = '';
    for(i=1;i<4;i++)
    {
        li += '<li class="spl"><div class="inspl splash-tbl"></div></li><li class="spl"><div class="inspl splash-tbl w75"></div></li><li class="spl"><div class="inspl splash-tbl w50"></div></li><li class="spl ';
        li += i % 2 === 0 ? 'hide' : '';
        li +='"><div class="inspl splash-tbl"></div></li><li class="spl bts ';
        li += i === 3 ? 'hide' : '';
        li +='"></li>';
    }
    li += '<li class="spl bts"></li>';
    li += '<li class="spl"><div class="inspl splash-tbl w75"></div></li><li class="spl"><div class="inspl splash-tbl w50"></div></li>';
    aside.html(li);

}

// splash aside
splashaside();

function createaside()
{

    var el = $('body').find('ul.moby__drawer-menu');
    var aside = replacequot(config.apps.aside);
    var sublevel = getaccount().sublevel;

    // console.log(sublevel);
    //
    var li = '';
    $.each(aside[sublevel], function(i, item)
    {
        if( item.type === '' )
        {
            li += '<li><a href="'+item.url+'" class="" ><i class="'+item.icon+'"><span class="path1"></span></i><span class="menu-item-title">'+item.title+'</span></a></li>';
        }
        else
        {
            li += '<li>';
                li += '<a href="#'+item.type+'" data-toggle="collapse" aria-expanded="false"><i class="'+item.icon+'"><span class="path1"></span><span class="path2"></span></i><span class="menu-item-title">'+item.title+'</span><i class="icon icon-keyboard_arrow_down arrow-icon"></i></a>';

            li += '<div class="collapse" id="'+item.type+'"><ul>';
                $.each(item.child, function(y, x)
                {
                    li += '<li><a href="'+x.url+'" data-role="collapse"><span>'+x.title+'</span></a></li>';
                })
                
            li += '</ul></div>';

        li +='</li>';
        }
    
    });


    el.html(li);
    

    return;
}

function aside()
{
    // createaside();
    getaside();
    //
    var loc = location.href;
    
    var area = $('.moby__side-bar ul').find('a[href="'+loc+'"]');

    area.addClass('active');

    if( $('.moby__side-bar ul').find('a[href="'+loc+'"]').attr('data-role') === 'collapse' )
    {

        area_ext = area.parents('.collapse');

        area_ext.addClass('show');
        $('.moby__side-bar ul').find('a[href="#'+area_ext.attr('id')+'"]').addClass('active');
        $('.moby__side-bar ul').find('a[href="#'+area_ext.attr('id')+'"]').attr('aria-expanded', 'true');
        area.addClass('active');
    }

}

// aside();

    
</script>
