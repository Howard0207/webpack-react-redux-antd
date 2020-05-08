## CSS书写规范（遵循BEM）规范

eg:
```css
.block { /* styles */ }
.block__element { /* styles */ } 
.block--modifier { /* styles */ }
```
其中的BEM分别对应block ， element 和 modifier。

### 什么是块?

在规范中，块表示一个组件的意思，这样看上去有点抽象，我们可以通过例子来学习，假设你要写一个按钮的组件。我们只需要设置了一个 .button 类的按钮，然后可以在任何\<button>按钮上使用该类，就可以生成该组件的传统样式。使用.button而不是用button的原因是因为类允许无限的可重用性，而即使是最基本的元素也可能改变样式。但是在实际的项目使用中，我们会发现一个按钮可能是大按钮，可能是小按钮，也可能是红色的，或者黄色的。于是就引申出了BEM的modifier。


### 什么是元素

元素是块的子节点。为了表明某个东西是一个元素，你需要在块名后添加 __element。所以，如果你看到一个像那样的名字，比如 form__row ，你将立即知道 .form 块中有一个 row 元素。

```html
<style>
    .form__row { /* styles */ }
</style>
<form class="form" action="">
   <div class="form__row"> 
  </div> 
</form> 
```

### 什么是修饰符?

修饰符是改变某个块的外观的标志。要使用修饰符，可以将 --modifier 添加到块中。
假如我们要添加一个默认按钮，一个主要按钮，一个大按钮，一个小按钮，一个主要的小按钮。
我们可以这样:
```html
 <button class=".button .button--default"></button>  
 <button class=".button .button--primary"></button>
 <button class=".button .button--large"></button>   
 <button class=".button .button--small"></button> 
 <button class=".button .button--primary .button--small"></button> 
```


BEM 元素有两个优点 ：

- 你可以让 CSS 的优先级保持相对扁平。
- 你能立即知道哪些东西是一个子元素。

### 总结

以上就是简单的BEM规范和使用方法的简单介绍。基本的BEM规范的使用可以解决之前提到的一些问题：

class 的数量必须尽可能少 ，防止了css的优先级竞争。
立即知道一个 class 放在这个伟大工程中的什么地方，以防止大脑过载。
但是还有在实际应用中还有一些问题没有解决。

我必须 立即知道组件是否使用 JavaScript 。
我必须 立即知道编辑一个 class 是否安全,会不会干扰其他 CSS。
剩下的问题，我们就需要命名空间配合BEM来解决。
