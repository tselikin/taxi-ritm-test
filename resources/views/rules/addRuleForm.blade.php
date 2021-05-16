<h3 class="mt-3">Форма добавления новых пунктов правил</h3>
<form action="{!! route('store_rule') !!}" method="post">
    @include('rules.components.newAndEditRuleInputs')

</form>
