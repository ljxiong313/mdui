(function(){

  function Plugin(option){
    var value;

    this.each(function(){
      var $this = $(this);
      var inst = $this.data('fab.mdui');

      if(!inst){
        $this.data('fab.mdui', (inst = new mdui.Fab(this, option)));
      }
      if(typeof option === 'string'){
        value = inst[option]();
      }
    });

    return typeof value === 'undefined' ? this : value;
  }

  var old = $.fn.mdFab;

  $.fn.mdFab = Plugin;

  // NO CONFLICT
  // ===========
  $.fn.mdFab.noConflict = function(){
    $.fn.mdFab = old;
    return this;
  };
})();

