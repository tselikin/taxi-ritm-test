<form action="{!! route('put_rule') !!}" method="post">
    @csrf
    @method('put')
    <input type="hidden" name="id" value="{{ $id }}">
    @include('rules.components.newAndEditRuleInputs', $rule)
    {{-- <button type="submit" name="button" class="m-0.5 bg-red-100 p-1" onclick="return confirm('Точно удалить?')">Удалить п.{{ $rule->paragraph }}</button> --}}
</form>
