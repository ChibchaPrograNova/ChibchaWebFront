<template>
    <BaseCard>
        <form @submit.prevent="handleSubmit">
            <div class="input-row" v-for="(field, index) in formFields" :key="index">
                <label :for="field.name">{{ field.label }}</label>

                <input v-if="field.type === 'text' ||
                    field.type === 'email' ||
                    field.type === 'tel' ||
                    field.type === 'password'
                    " :name="field.name" :type="field.type" :id="field.name" :placeholder="field.placeholder || ''"
                    v-model="formData[field.name]" />
                <input v-else-if="field.type === 'number'" :name="field.name" :type="field.type" :id="field.name"
                    :placeholder="field.placeholder || ''" :min="field.min || null" :max="field.max || null"
                    :step="field.step || null" v-model="formData[field.name]" />

                <select v-else-if="field.type === 'select'" :name="field.name" :id="field.name"
                    v-model="formData[field.name]">
                    <option v-for="(option, optIndex) in field.options" :key="optIndex" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>

                <textarea v-else-if="field.type === 'textarea'" :name="field.name" :id="field.name"
                    :placeholder="field.placeholder" v-model="formData[field.name]" />
            </div>
            <div class="input-row">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </BaseCard>
</template>
  
<script>
import FormBuilder from '../../helpers/FormBuilder';
import BaseCard from '../../components/UI/BaseCard.vue';

export default {
    props: {
        formConfig: [Array, Object],
    },
    data() {
        return {
            formFields: [],
            formData: {},
        };
    },
    created() {
        if (this.formConfig) {
            this.formFields = this.buildFormFields(this.formConfig);
        }
    },
    methods: {
        buildFormFields(config) {
            const formFields = [];

            if (Array.isArray(config)) {
                return config;
            } else if (typeof config === 'object') {
                for (const fieldName of Object.keys(config)) {
                    const field = config[fieldName];

                    let newField = null;

                    switch (field.type) {
                        case 'text':
                        case 'email':
                            newField = {
                                type: field.type,
                                name: fieldName,
                                label: field.label || '',
                                placeholder: field.placeholder || '',
                            };
                            break;
                        case 'number':
                            newField = {
                                type: 'number',
                                name: fieldName,
                                label: field.label || '',
                                placeholder: field.placeholder || '',
                                min: field.min || null,
                                max: field.max || null,
                                step: field.step || null,
                            };
                            break;
                        case 'select':
                            newField = {
                                type: 'select',
                                name: fieldName,
                                label: field.label || '',
                                options: field.options || [],
                            };
                            break;
                    }

                    if (newField) {
                        formFields.push(newField);
                    }
                }
            }

            return formFields;
        },
        handleSubmit(e) {
            e.preventDefault();
        },
    },
};
</script>
  
<style scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type="checkbox"]+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type="checkbox"] {
    display: inline;
    width: auto;
    border: none;
}

input[type="checkbox"]:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>