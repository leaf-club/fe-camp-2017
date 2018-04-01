class Modal {
  constructor(id) {
    this.container = document.getElementById(id);
    this.btn = document.querySelector(`[data-target =${id}]`);
    if (this.btn) {
      this.btn.addEventListener('click', evt => this.showModal());
    }
    if (this.container) {
      this.container.addEventListener('click', evt => {
        if (evt.target === this.container || evt.target.getAttribute('data-dismiss') === 'close') {
          this.hideModal();
        }
      })
    }
  }
  showModal(){
    $base.show(this.container);
    console.log("clicked");
    document.body.className = 'modal--open';
  }
  hideModal(){
    $base.hide(this.container);
    document.body.className = '';
  }
}