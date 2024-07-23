<template>
      <div class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 class="text-2xl font-semibold mb-6">Rental Property Information</h2>
        <form action="/submit-rental-property" method="POST" class="space-y-4">
            <!-- Property Number -->
            <div>
                <label for="PropertyNo" class="block text-sm font-medium text-gray-700">Property Number</label>
                <input type="number" id="PropertyNo" name="PropertyNo" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Property Name -->
            <div>
                <label for="PropertyName" class="block text-sm font-medium text-gray-700">Property Name</label>
                <input type="text" id="PropertyName" name="PropertyName" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Tenant Name -->
            <div>
                <label for="TenantName" class="block text-sm font-medium text-gray-700">Tenant Name</label>
                <input type="text" id="TenantName" name="TenantName" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Monthly Rent -->
            <div>
                <label for="MonthlyRent" class="block text-sm font-medium text-gray-700">Monthly Rent</label>
                <input type="number" id="MonthlyRent" name="MonthlyRent" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Tenant Mobile Number -->
            <div>
                <label for="TenantMobileNo" class="block text-sm font-medium text-gray-700">Tenant Mobile Number</label>
                <input type="tel" id="TenantMobileNo" name="TenantMobileNo" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Agreement Start Date -->
            <div>
                <label for="AgreementStartDate" class="block text-sm font-medium text-gray-700">Agreement Start Date</label>
                <input type="date" id="AgreementStartDate" name="AgreementStartDate" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Agreement Expiry Date -->
            <div>
                <label for="AgreementExpiryDate" class="block text-sm font-medium text-gray-700">Agreement Expiry Date</label>
                <input type="date" id="AgreementExpiryDate" name="AgreementExpiryDate" required
                       class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
            
            <!-- Submit Button -->
            <div class="mt-6">
                <button type="submit" class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Submit
                </button>
            </div>
        </form>
    </div>
</template>
<script>
</script>