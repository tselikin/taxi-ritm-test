<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Правила проекта
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">

                    @foreach ($rules as $rule)
                        <div class="mt-3">
                            {{ $rule->paragraph }}.
                            {{ $rule->description }}
                            <div>{{ $rule->punishment }}</div>
                            <div>
                                @include('rules.deleteRuleForm', ['id'=>$rule->id])
                                <a href="{!! route('edit_rule', $rule) !!}" class="m-0.5 bg-blue-50 p-1" >Редактировать п.{{ $rule->paragraph }}</a>
                            </div>
                        </div>
                    @endforeach

                    <div class="pt-4">
                        @include('rules.addRuleForm', ['rule' => null])
                    </div>
                </div>
            </div>

        </div>
    </div>
</x-app-layout>
